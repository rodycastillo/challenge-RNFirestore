import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import {
  addDoc,
  collection,
  connectFirestoreEmulator,
} from "firebase/firestore";
import app from "../database/firebase";

export const CreateUserScreen = () => {
  const [stateForm, setStateForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const AddNewUser = async () => {
    if (
      stateForm.name.length === 0 ||
      stateForm.email.length === 0 ||
      stateForm.phone.length === 0
    ) {
      alert("Please provide an input");
    } else {
      try {
        const docRef = await addDoc(collection(app.db, "users"), {
          name: stateForm.name,
          email: stateForm.email,
          phone: stateForm.phone,
        });
        console.log("Document written with ID: ", docRef);
      } catch (error) {
        connectFirestoreEmulator.log(e);
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(v) => setStateForm({ ...stateForm, name: v })}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(v) => setStateForm({ ...stateForm, email: v })}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(v) => setStateForm({ ...stateForm, phone: v })}
        />
      </View>
      <View>
        <Button title="Save User" onPress={AddNewUser} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
