import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../Firebase/FirebaseUtils";

import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import { connect } from "react-redux";
import { updateCollections } from "../../Actions/Shop/ShopActions";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionpageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.unsubsribeFromSnapShot = null;
    this.state = {
      loading: true
    };
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionpageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // this.unsubsribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
    //   console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  componentWillUnmount() {
    // this.unsubsribeFromSnapShot();
  }
}

const mapDispatchToProps = {
  updateCollections
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
