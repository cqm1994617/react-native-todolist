/**
 * Created by chenqiming on 16/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Alert,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';


export default class ListPage extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.arr = []
        this.state = {
            dataSource: ds.cloneWithRows(this.arr),
            word: '',
            pause: true
        }
    };

    removeList(rowID) {
        this.arr = this.arr.concat()
        this.arr.splice(rowID, 1)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })
    };

    myAlert(r) {
        Alert.alert(
            'Alert success!',
            'rowID: ' + r,
            [
                {text: 'OK!', onPress: ()=>console.log("success")}
            ]
        )
    };

    rowData(data, sectionID, rowID) {
        return (
            <TouchableOpacity style={styles.list} onPress={(r)=>this.myAlert(rowID)}>
                <Text>{data}</Text>
                <TouchableHighlight style={styles.closePosition} underlayColor="#f00" onPress={(rid)=>this.removeList(rowID)}>
                    <Image style={styles.closeImg} source={require("./iconfont-icon32.png")}/>
                </TouchableHighlight>
            </TouchableOpacity>
        )
    };

    add() {
        var temp = this.arr;
        temp.push(this.state.word);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })
    };

    textChange(t) {
        this.setState({
            word: t
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.selectBar}>
                    <TextInput style={styles.select} onChangeText={(t)=>this.textChange(t)}/>
                    <TouchableOpacity style={styles.addBtn} onPress={()=>this.add()}>
                        <Image style={styles.addImg} source={require("./iconfont-tianjia.png")}/>
                    </TouchableOpacity>
                </View>
                <ListView bounces={false} style={styles.listview} dataSource={this.state.dataSource}
                          renderRow={(data, sectionID, rowID)=>this.rowData(data, sectionID, rowID)} />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    selectBar: {
        paddingTop: 20,
        height: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    select: {
        marginLeft: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        flex: 8,
    },
    addBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addImg: {
        width: 30,
        height: 30
    },
    listview: {
        marginTop: 25,
    },
    list: {
        height: 60,
        padding: 10,
        borderWidth: 1,
        marginLeft: 5,
        borderColor: '#ddd',
        marginRight: 5,
        marginBottom: 5
    },
    closePosition: {
        position: 'absolute',
        borderRadius: 15,
        padding: 5,
        top: 5,
        right: 5,
    },
    closeImg: {
        width: 20,
        height: 20,
    }
});
