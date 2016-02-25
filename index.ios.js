/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

import ListPage from './pages/ListPage.js';

class todolist extends Component {
  constructor(props){
        super(props);
    };

    render() {
        let defaultName = 'ListPage';
        let defaultComponent = ListPage;
        return (
            <Navigator initialRoute = {{name: defaultName, component: defaultComponent}}
                       configureScene={(route) => {
                           return Navigator.SceneConfigs.PushFromRight;
                       }}
                       renderScene = {(route, navigator) => {
                           let Component = route.component;
                           return <Component {...route.params} navigator={navigator} />
                       }}
            />

        );
    }
}


AppRegistry.registerComponent('todolist', () => todolist);
