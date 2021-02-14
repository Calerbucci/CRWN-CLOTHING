import {connect} from 'react-redux';
import {selectIsFetching} from '../../redux/shop/shop-selector'
import CollectionOverview from './CollectionOverview'
import withSpinner from '../with-spinner/withSpinner'
// import {compose} from 'redux'


const mapStateToProps = (state) => ({
    isLoading: selectIsFetching(state)
})


export const collectionOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionOverview))

// export default collectionOverviewContainer = compose(
//     connect(mapStateToProps),
//     withSpinner
// )(CollectionOverview)
