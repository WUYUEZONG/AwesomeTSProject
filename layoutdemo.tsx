
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FlexDirectionBasics = () => {

    const [flexDirection, setflexDirection] = useState("column");

    const theColors = ['powderblue', 'skyblue', 'steelblue'];

    return (
        <PreviewLayout
            label="flexDirection"
            values={["column", "row", "row-reverse", "column-reverse"]}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}
        >
            <View
                style={[styles.box, { backgroundColor: "powderblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "skyblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "steelblue" }]}
            />
        </PreviewLayout>
    );
};


const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (

    <View style={{ padding: 10, flex: 1 }}>
        <ScrollView horizontal={true} style={[styles.scrollview]}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.scrollviewButton,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>
            {children}
        </View>
    </View>
);



const styles = StyleSheet.create({
    scrollview: {
        // alignContent: "center",
        width: "100%",
        maxHeight: 48,
    },
    scrollviewButton: {
        justifyContent: "center",
        // alignContent: "center",
        paddingHorizontal: 12,
        // paddingVertical: 12,
        backgroundColor: "oldlace",
        marginHorizontal: 8,
        // height: "100%",
        // lineHeight: 48,
        textAlign: "center",
        borderRadius: 4,
    },
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "oldlace",
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
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        justifyContent: "center",
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
        fontSize: 14,
        fontWeight: "600",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 24,
    },
});

export default FlexDirectionBasics;