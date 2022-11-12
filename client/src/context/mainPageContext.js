import { createContext, useContext, useReducer } from "react";
import {
  CLOSE_PANEL,
  OPEN_PANEL,
  SET_CURRENT_ELEMENT_INDEX,
  SET_CURRENT_LIST_ITEM,
  SET_PANEL_POS,
} from "../Actions";
import reducer from "../reducers/MainPageReducer";

const initialState = {
  panelOpen: false,
  panelPos: {},
  currentListItem: {},
  currentElementIndex: null,
};

const MainPageContext = createContext();

export const MainPageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openPanel = () => {
    dispatch({ type: OPEN_PANEL });
  };

  const closePanel = () => {
    dispatch({ type: CLOSE_PANEL });
  };

  const setPanelPos = (pos) => {
    dispatch({ type: SET_PANEL_POS, payload: pos });
  };
  const setCurrentListItem = (listItem) => {
    dispatch({ type: SET_CURRENT_LIST_ITEM, payload: listItem });
  };

  const setCurrentElementIndex = (index) => {
    dispatch({ type: SET_CURRENT_ELEMENT_INDEX, payload: index });
  };

  return (
    <MainPageContext.Provider
      value={{
        ...state,
        openPanel,
        closePanel,
        setPanelPos,
        setCurrentListItem,
        setCurrentElementIndex,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export const useMainPageContext = () => {
  return useContext(MainPageContext);
};
