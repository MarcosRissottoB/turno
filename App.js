import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

// Components
import {Shift} from './components/Shift';
import {ShiftForm} from './components/ShiftForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [shifts, setShifts] = useState([]);

  const deletePatient = id => {
    setShifts(currentShift => {
      return currentShift.filter(shift => shift.id !== id);
    });
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => closeKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de citas!</Text>
        <View>
          <TouchableHighlight
            onPress={() => handleShowForm()}
            style={styles.btnShowForm}>
            <Text style={styles.textShowForm}>
              {showForm ? 'Ocultar formulario' : 'Crear cita'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {showForm ? (
            <>
              <Text style={styles.title}>Crear nueva cita</Text>
              <ShiftForm
                shifts={shifts}
                setShifts={setShifts}
                setShowForm={setShowForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}>
                {shifts.length > 0
                  ? 'Administra tus citas!'
                  : 'No hay citas, agrega una.'}
              </Text>
              <FlatList
                style={styles.list}
                data={shifts}
                renderItem={({item}) => (
                  <Shift item={item} deletePatient={deletePatient} />
                )}
                keyExtractor={shift => shift.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  title: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  btnShowForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  textShowForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
