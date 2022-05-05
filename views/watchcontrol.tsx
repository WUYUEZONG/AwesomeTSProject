import React, { useState } from "react";
import { Component } from "react";
import { ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, View } from "react-native";
import Util from "./Util";

type Props = {
    stop: Function;
}

//(stop, clear, start, add) 
const WatchControl = (props: Props) => {
    const [isOn, setIsOn] = useState(false);
    const [startBtnText, setStartBtnText] = useState("启动");
    const [startBtnColor, setStartBtnColor] = useState("#60B644");
    const [stopBtnText, setStopBtnText] = useState("计次");
    const [underlayColor, setUnderlayColor] = useState("#fff");

    function face(sectionTime: String, totalTime: String)  {
        return (<View style={styles.watchFaceContainer}>
            <Text style={styles.sectionTime}>{sectionTime}</Text>
            <Text style={styles.totalTime}>{totalTime}</Text>
        </View>);
    }

    function record(records: {title: String,time: String}[]) {
        return (<ScrollView style={styles.recordList}>
            {
                records.map((ele, index) => (
                    <View style={styles.recordItem}>
                        <Text style={styles.recordItemTitle}>{ele.title}</Text>
                        <Text style={styles.recordItemTime}>{ele.time}</Text>
                    </View>
                ))
            }
        </ScrollView>);
    }

    function _runWatch() {
        if (isOn) {
            props.stop()
        } else {

        }
        setStartBtnText(isOn ? "启动" : "停止");
        setStartBtnColor(isOn ? "#60B644" : "#ff0044");
        setStopBtnText(isOn ? "复位" : "计次");
        setUnderlayColor(isOn ? "#fff" : "#eee");
        setIsOn(!isOn);
    }

    function _addRecord() {
        if (isOn) {
            // add != undefined ? add!() : console.log("add func is empty");
        } else {
            // clear != undefined ? clear!() : console.log("clear func is empty");
            setStopBtnText("计次");
        }
    }

    return (
        <View style={styles.watchContainer}>
            {face("1:00:00","2:00:00")}
        <View style={styles.watchControlContainer}>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
                <TouchableHighlight style={styles.btnStop} underlayColor={underlayColor} onPress={() => _addRecord()}>
                    <Text style={[styles.btnStartText,]}>{stopBtnText}</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={() => _runWatch()}>
                    <Text style={[styles.btnStartText, { color: startBtnColor }]}>{startBtnText}</Text>
                </TouchableHighlight>
            </View>
        </View>
        { record([{title: "the title", time: "123"},{title: "the title", time: "123"}])}
        </View>
    );

}


const styles = StyleSheet.create({
    watchContainer: {
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        marginTop: 60,
    },
    watchFaceContainer: {
        width: Util.size.width,
        paddingTop: 50, paddingLeft: 30, paddingRight: 30, paddingBottom: 40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor: "#ddd",
        height: 170,
    },
    sectionTime: {
        fontSize: 20,
        fontWeight: "100",
        paddingRight: 30,
        color: "#555",
        position: "absolute",
        left: Util.size.width - 140,
        top: 30
    },
    totalTime: {
        fontSize: Util.size.width === 375 ? 70 : 60,
        fontWeight: "100",
        color: "#222",
        paddingLeft: 20
    },
    watchControlContainer: {
        width: Util.size.width,
        height: 100,
        flexDirection: "row",
        backgroundColor: '#f3f3f3',
        paddingTop: 30, paddingLeft: 60, paddingRight: 60, paddingBottom: 0,
    },
    btnStart: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStop: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStartText: {
        fontSize: 14,
        backgroundColor: "transparent"
    },
    btnStopText: {
        fontSize: 14,
        backgroundColor: "transparent",
        color: "#555"
    },
    recordList: {
        width: Util.size.width,
        height: Util.size.height - 300,
        paddingLeft: 15,
    },
    recordItem: {
        height: 40,
        borderBottomWidth: Util.pixel, borderBottomColor: "#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight: 10, paddingBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    recordItemTitle: {
        backgroundColor: "transparent",
        flex: 1,
        textAlign: "left",
        paddingLeft: 20,
        color: "#777"
    },
    recordItemTime: {
        backgroundColor: "transparent",
        flex: 1,
        textAlign: "right",
        paddingRight: 20,
        color: "#222"
    },
});

export default WatchControl