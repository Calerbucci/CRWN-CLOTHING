import React from 'react';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview'
import {Route} from 'react-router-dom'
import Collection from '../collection/Collection';
import {connect} from 'react-redux'
import withSpinner from '../../components/with-spinner/withSpinner'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions'
import {selectIsFetching, selectIsLoading} from '../../redux/shop/shop-selector'


const CollectionOverviewWithSpinner = withSpinner (CollectionOverview);
const CollectionPageWithSpinner = withSpinner(Collection)

class Shop  extends React.Component  {

    
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync(); 
    }
    render()
        {
            const {match, isCollectionFetching, selectIsLoading} = this.props;
            return (
            <div className='shop-page'> 
             <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}/>    
             <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!selectIsLoading} {...props} />}/>
            </div>);
            }
        }

        const mapStateToProps = state => ({
            isCollectionFetching: selectIsFetching(state),
            selectIsLoading: selectIsLoading(state)
        });

        const maspDispatchToprops = (dispatch) => ({
            fetchCollectionsStartAsync: () =>  dispatch(fetchCollectionsStartAsync())
        });



export default connect(mapStateToProps, maspDispatchToprops) (Shop);