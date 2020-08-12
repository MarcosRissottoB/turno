import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

export const ShiftForm = ({shifts, setShowForm, setShifts}) => {
  const [parient, setParient] = useState('');
  const [owner, setOwner] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDate = date => {
    const opcions = {year: 'numeric', month: 'long', day: '2-digit'};
    setDate(date.toLocaleDateString('es-ES', opcions));
    hideDatePicker();
  };

  const showTimeicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmHour = hour => {
    const opcions = {hour: 'numeric', minute: '2-digit'};
    setHour(hour.toLocaleString('en-US', opcions));
    hideTimePicker();
  };

  const createNewShitf = () => {
    parient.trim() === '' ||
    owner.trim() === '' ||
    phoneNumber.trim() === '' ||
    date.trim() === '' ||
    hour.trim() === '' ||
    symptoms.trim() === ''
      ? showAlert()
      : console.log('todo bien');
    const shift = {parient, owner, phoneNumber, date, hour, symptoms};
    shift.id = shortid.generate();
    const newShift = [...shifts, shift];
    setShifts(newShift);
    setShowForm(false);
  };

  const showAlert = () => {
    Alert.alert('Error!', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setParient(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setOwner(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmDate}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Show Hour Picker" onPress={showTimeicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmHour}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige la hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hour}</Text>
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => setSymptoms(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => createNewShitf()}
            style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>Crear cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
