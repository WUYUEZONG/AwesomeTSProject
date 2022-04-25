
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FlexDirectionBasics = () => {

    const [flexDirection, setflexDirection] = useState("column");

    const theColors = ['powderblue', 'skyblue', 'steelblue'];

    return (<PreviewLayout 
        label='FlexDirection'
        values={[]}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}
    >

        {
            theColors.map((color) => {
                <View style={[styles.box, {backgroundColor: color}]} />        
            })
        }
    </PreviewLayout>);
};


const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {
                values.map((value) => {
                    <TouchableOpacity>
                        <Text>
                            {value}
                        </Text>
                    </TouchableOpacity>
                })
            }
        </View>
    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});