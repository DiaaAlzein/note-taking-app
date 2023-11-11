import React, {useEffect} from 'react';
import {FlatList, LayoutAnimation, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../../redux/store';
import {Note} from '../../../interfaces/screens/notes';
import AddFab from '../../../components/addFab';
import {styles} from './styles';
import EmptyList from '../../../components/emptyList';
import {MainScreenProps} from '../../../interfaces/screens/mainScreen';
import screens from '../../../config/screens';
import {getData} from './actions';
import {setLocalData} from '../../../utils/storage';
import {keys} from '../../../config/keys';
import NoteItem from '../../../components/noteItem';
import {deleteNote} from './reducer';
import {toggleAnimation} from '../../../utils/animations/toggleAnimation';

const Notes: React.FC<MainScreenProps> = ({navigation}) => {
  const {isLoading, isError, notes} = useSelector(
    (state: RootState) => state.notes,
  );

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id: number) => {
    store.dispatch(deleteNote(id));
    LayoutAnimation.configureNext(toggleAnimation(300));
  };

  useEffect(() => {
    setLocalData(keys.notes, notes);
  }, [notes]);

  const renderItem = ({item}: {item: Note}) => (
    <NoteItem
      onPress={() =>
        navigation?.navigate(screens.noteManager, {selected: item})
      }
      onRemovePress={() => deleteItem(item.id)}
      text={item.text}
      category={item.category}
      client={item.client}
    />
  );

  const renderEmpty = () => {
    if (isLoading) {
      return <EmptyList label={'Loading...'} />;
    } else if (isError) {
      return <EmptyList label={'Something went wrong!'} />;
    }
    return <EmptyList label={'Nothing to show'} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
      <AddFab
        style={styles.addButton}
        onPress={() => navigation?.navigate(screens.noteManager)}
      />
    </View>
  );
};

export default Notes;
