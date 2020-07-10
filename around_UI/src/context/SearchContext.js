import aroundApi from '../api/route';
import createDataContext from './createDataContext';

export const SEARCH_LIMIT = 10;

const INITIAL_STATE = {
  users: [],
  searchList: [],
  showList: [],
  fromIndex: 0,
  toIndex: SEARCH_LIMIT,
  searchText: '',
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'all_users':
      return {
        ...state,
        users: action.payload,
      };
    case 'search_list':
      return {
        ...state,
        searchList: action.payload.searchedUsers,
        searchText: action.payload.searchText,
      };
    case 'show_list':
      return {
        ...state,
        showList: action.payload.showUsersList,
        fromIndex: action.payload.fromIndex,
        toIndex: action.payload.toIndex,
      };
    case 'reset_search_list':
      return {
        ...state,
        searchList: [],
        showList: [],
        fromIndex: 0,
        toIndex: SEARCH_LIMIT,
        searchText: '',
      };
    default:
      return state;
  }
};

const getUsers = (dispatch) => async () => {
  try {
    const response = await aroundApi.get('all-users-basic-data');
    dispatch({ type: 'all_users', payload: response.data });
  } catch (err) {
    console.log('Error in search', err);
  }
};

const searchUsers = (dispatch) => (users, showList, searchText, from, to, search) => {
  const searchedUsers = users.filter((user) => {
    if (user.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
      return user;
    }
  });

  let showUsersList = showList;
  let fromIndex = from + SEARCH_LIMIT;
  let toIndex = to + SEARCH_LIMIT;

  if (search) {
    showUsersList = [];
  }

  for (let i = from; (i < to) && (i < searchedUsers.length); i++) {
    showUsersList.push(searchedUsers[i]);
  }

  dispatch({ type: 'search_list', payload: { searchedUsers, searchText } });
  dispatch({ type: 'show_list', payload: { showUsersList, fromIndex, toIndex } });
};

const resetSearchList = (dispatch) => () => {
  dispatch({ type: 'reset_search_list' });
};

export const { Context, Provider } = createDataContext(
  searchReducer,
  {
    getUsers,
    searchUsers,
    resetSearchList,
  },
  INITIAL_STATE,
);
