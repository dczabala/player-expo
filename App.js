import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";



export default class App extends React.Component {
    
    state = {
        trackLength: 300,
        timeElapsed: "0:00",
        timeRemaining: "5:00"
    };

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: "center" }}>
                  {/* Playlist name marginTop: 150 for desktop*/}
                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        <Text style={[styles.textLight]}>PLAYLIST NAME</Text>
                    </View>
                    {/* Book Cover picture */}
                    <View style={styles.coverContainer}>
                        <Image source={require("./bookCover.jpg")} style={styles.cover}></Image>
                    </View> 
                    {/* Song name and artist */}
                    <View style={{ alignItems: "center", marginTop: 32 }}>
                        <Text style={[styles.textDark]}>Book Title</Text>
                        <Text style={[styles.text]}>Author</Text>
                    </View>
                </View>

            {/* Slider */}
                <View style={{ margin: 32, alignSelf: "center"}}>
                    <Slider
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#5C5C5C"
                        onValueChange={seconds => this.changeTime(seconds)}
                    ></Slider>
                    <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

                {/* Buttons */}
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                  {/* Previous button */}
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={32} color="#787878"></FontAwesome5>
                    </TouchableOpacity>

                    {/* Play button*/}
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={32}
                            color="#48484A"
                            style={{ marginLeft: 8 }}
                        ></FontAwesome5>
                    </TouchableOpacity> 
                     {/* Pause button 
                     <TouchableOpacity style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="pause"
                            size={32}
                            color="#48484A"
                        ></FontAwesome5>
                    </TouchableOpacity>*/}

                  {/* Next button */}
                    <TouchableOpacity>
                        <FontAwesome5 name="forward" size={32} color="#787878"></FontAwesome5>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEC"
    },
    textLight: {
        color: "#B6B7BF",
        fontSize: 12,
    },
    text: {
        color: "#8E97A6",
        fontSize: 16, 
        marginTop: 8
    },
    textDark: {
        color: "#3D425C",
        fontSize: 20, 
        fontWeight: "500",
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
    },
    cover: {
        width: 250,
        height: 250
    },
    track: {
        /*for desktop
        width: 800*/
        width: 350,
        height: 5,
        borderRadius: 2,
        backgroundColor: "#D9D9D9"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#3D425C"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        backgroundColor: "#F2F2F2",
        borderColor: "#DEDEDE",
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
    }
 
});
