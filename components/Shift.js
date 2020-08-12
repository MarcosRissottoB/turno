import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const Shift = ({item, deletePatient}) => {
  const deleteDialog = id => {
    deletePatient(id);
  };

  return (
    <View style={styles.shift}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.text}>{item.parient}</Text>
      </View>
      <View>
        <Text style={styles.label}>Dueño</Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Teléfono de contacto</Text>
        <Text style={styles.text}>{item.phoneNumber}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas</Text>
        <Text style={styles.text}>{item.symptoms}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => deleteDialog(item.id)}
          style={styles.btnDelete}>
          <Text style={styles.textDelete}>Delete</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shift: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  textDelete: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
