import React from 'react';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview'
import {Route} from 'react-router-dom'
import Collection from '../collection/Collection';
import {firestore} from '../../firebase/firebase'
import {convertCollectionSnapshotToMap} from '../../firebase/firebase'
import {connect} from 'react-redux'
import { updateColections } from '../../redux/shop/shop-actions';
import withSpinner from '../../components/with-spinner/withSpinner'

const CollectionOverviewWithSpinner = withSpinner (CollectionOverview);
const CollectionPageWithSpinner = withSpinner(Collection)

class Shop  extends React.Component  {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot= null;

    componentDidMount(){

        const {updateColections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        updateColections(collectionMap);
        this.setState({loading: false})
     })
    }

    //https://firestore.googleapis.com/v1/projects/crwn-db-d33b7/databases/(default)/documents/

    render()
        {
            const {match} = this.props;
            const {loading} = this.state;
            return (
            <div className='shop-page'> 
             <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>    
             <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
            </div>);
            }

        }

        const maspDispatchToprops = (dispatch) => ({
            updateColections: collectionMap => dispatch(updateColections(collectionMap))
        })



export default connect(null, maspDispatchToprops) (Shop);