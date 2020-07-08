import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [permission_permissions, set_permission_permissions] = useState(
    "denied"
  );
  const [permission_image_picker, set_permission_image_picker] = useState(
    "denied"
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Permissions: {permission_permissions} </Text>
        <Text>ImagePicker: {permission_image_picker}</Text>
      </View>
      <Button
        title="Permissions"
        onPress={async () => {
          const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          set_permission_permissions(result.status);
        }}
      />
      <Button
        title="ImagePicker"
        onPress={async () => {
          const result = await ImagePicker.requestCameraRollPermissionsAsync();
          set_permission_image_picker(result.status);
        }}
      />
    </View>
  );
}
