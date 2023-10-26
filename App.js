import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Nama from "./components/Nama";

function getFullName(firsttName, lastName) {
  return firsttName + " " + lastName;
}

const Profile = () => {
  const [isBusy, setIsBusy] = useState(true);
  const [listName, setListName] = useState(["Farhan", "Angel"]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hello, Namaku {getFullName("Fahmi", "Syaifudin")}!</Text>

      {listName.map((item, key) => {
        return <Nama name={item} sibuk={isBusy} key={key} />;
      })}

      <View style={{ marginTop: 8 }}>
        <Button
          title={isBusy ? "Tidak Sibuk" : "Sibuk"}
          onPress={() => {
            setIsBusy(!isBusy);
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
