import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>

        <Text style={styles.title}>Create Account</Text>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#666" />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#666" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-add-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}> Sign Up</Text>
        </TouchableOpacity>

        {/* Navigate Back to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007bff',
  },
});
