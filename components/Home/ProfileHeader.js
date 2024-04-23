import { View, Text, StyleSheet } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import AvatarImg from "../../assets/avatar.png";

// Custom Avatar component
function CustomAvatar() {
  return <Avatar.Image source={AvatarImg} size={70} style={styles.avatar} />;
}

// ProfileHeader component
function ProfileHeader() {
  return (
    <>
      <View style={styles.container}>
        <CustomAvatar />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.usernameText}>@johndoe</Text>
        </View>
      </View>
      <Divider />
    </>
  );
}

// Styles for ProfileHeader component
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatar: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 16,
    color: "gray",
  },
});

export default ProfileHeader;
