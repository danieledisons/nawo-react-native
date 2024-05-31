import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Font from "expo-font";
import namelogo from "@/components/namelogo";

export default function HomeScreen() {
  const fontsLoaded = Font.useFonts({
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("@/assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
  });

  const recentTransaction = [
    {
      name: "John Ogaga",
      amount: "+20,983",
      bank: "Zenith Bank",
      time: "12:03am",
      url: "../../assets/images/j.png",
    },
    {
      name: "Habib Yogurt",
      amount: "-20,983",
      bank: "GT Bank",
      time: "12:03am",
      url: "../../assets/images/j.png",
    },
    {
      name: "Musa Sulei",
      amount: "-20,983",
      bank: "UBA",
      time: "12:03am",
      url: "../../assets/images/j.png",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 12,
            // borderWidth: "1px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.text}>
              Hello <Text style={{ fontFamily: "Inter-Bold" }}>John</Text>{" "}
            </Text>

            <Text style={styles.secondaryText}>Your finance look good</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/bell.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/search.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            // borderWidth: "1px solid green",
            padding: 16,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: "1px",
              width: 335,
              height: 335,
              borderRadius: 15,
              padding: 12,
              // justifyContent: "center",
              alignItems: "center",
              borderColor: "#210FA4",
              backgroundColor: "#210FA4",
            }}
          >
            <Image
              source={require("../../assets/images/memoji.png")}
              style={{
                width: 52,
                height: 52,
                borderWidth: "10.5px",
                borderRadius: "50%",
                backgroundColor: "#BDD6FF",
                borderColor: "#BDD6FF",
              }}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
                maxWidth: "75%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginBottom: 8,
                  fontFamily: "Inter-Light",
                }}
              >
                Your available balance is
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  fontWeight: 800,
                  marginBottom: 12,
                  fontFamily: "Inter-Bold",
                }}
              >
                N20,983
              </Text>
              <Text
                style={{
                  fontStyle: 11,
                  // fontWeight: 500,
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Inter-Regular",
                }}
              >
                By this time last month, you spent slightly higher (N22,719)
              </Text>
            </View>
            <View style={{ minWidth: "100%", marginTop: 48 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  Kuda Bank
                </Text>
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  N12,0000.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  GT Bank
                </Text>
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  N950.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  PiggyVest
                </Text>
                <Text style={{ color: "white", fontFamily: "Inter-Regular" }}>
                  N,1050.00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: "1px",
              width: 335,
              height: 90,
              borderRadius: 15,
              alignItems: "center",
              borderColor: "#210FA4",
              backgroundColor: "#210FA4",
              marginTop: 32,
            }}
          >
            <View
              style={{
                padding: 8,
                // borderWidth: "1px",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // paddingHorizontal: 20,
                paddingRight: -20,
                paddingTop: 12,
              }}
            >
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/notification.png")}
                    style={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "white",
                    marginBottom: 12,
                    fontSize: 14,
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Sort your transactions
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                  }}
                >
                  Get your points for sorting your {"\n"}transactions
                </Text>
              </View>
              <View
                style={{
                  // borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/back.png")}
                    style={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 12,
              paddingVertical: 12,
              marginTop: 32,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#C1B9F9",
                marginBottom: 8,
                fontFamily: "Inter-Bold",
              }}
            >
              My Budgets
            </Text>
            <View
              style={{
                borderWidth: "1px",
                width: 335,
                height: 194,
                borderRadius: 15,
                // padding: 12,
                // justifyContent: "center",
                // alignItems: "center",
                borderColor: "#2C14DD",
                backgroundColor: "#432DEC",
                marginTop: 8,
                // padding: 8,
                paddingHorizontal: 12,
                paddingVertical: 16,
                gap: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // borderWidth: 1,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>You have</Text>
                <Image
                  source={require("../../assets/images/back.png")}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ color: "white", fontWeight: "800", fontSize: 18 }}
                >
                  N30,000
                </Text>
              </View>
              <View style={{ marginTop: 12 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                  }}
                >
                  Left out of N80,888 budgeted
                </Text>
              </View>
              <Image
                source={require("../../assets/images/line.png")}
                style={{
                  marginTop: 12,
                  height: 3.8,
                  width: 303,
                }}
              />
              <View style={{ marginTop: 8 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                  }}
                >
                  {" "}
                  😱 Sapa go soon catch you bros, calm down!!
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#C1B9F9",
                fontFamily: "Inter-Bold",
              }}
            >
              My Transactions
            </Text>
            <View
              style={{
                borderWidth: "1px",
                width: 335,
                height: 194,
                borderRadius: 15,
                // padding: 12,
                // justifyContent: "center",
                // alignItems: "center",
                borderColor: "#2C14DD",
                backgroundColor: "#432DEC",
                marginTop: 8,
                padding: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // borderWidth: 1,
                  justifyContent: "space-between",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Recent Transactions
                </Text>
                <Image
                  source={require("../../assets/images/back.png")}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", padding: 8 }}>
                {recentTransaction?.map((transaction) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/j.png")}
                      style={{
                        width: 35,
                        height: 35,
                        // borderWidth: "10.5px",
                        borderRadius: "50%",
                        // backgroundColor: "#BDD6FF",
                        // borderColor: "#BDD6FF",
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 6,
                        marginBottom: 4,
                        // borderWidth: 1,
                        justifyContent: "flex-start",
                        width: "60%",
                        // justifyContent: "center",
                        // alignContent: "center",
                        // alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: "Inter-Medium",
                        }}
                      >
                        {transaction.name}
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: "Inter-Light",
                        }}
                      >
                        {transaction.bank} {transaction.time}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#05EF40",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {transaction.amount}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#2C14DD",
  },
  text: {
    // fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#fff",
  },
  secondaryText: {
    // fontFamily: "Inter_400Regular",
    color: "#fff",
    fontWeight: 400,
    fontSize: 12,
  },
  image: {
    width: 38,
    height: 38,
  },
});
