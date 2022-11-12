import {
  CLOSE_PANEL,
  OPEN_PANEL,
  SET_CURRENT_ELEMENT_INDEX,
  SET_CURRENT_LIST_ITEM,
  SET_PANEL_POS,
} from "../Actions";

const MainPageReducer = (state, action) => {
  if (action.type === OPEN_PANEL) {
    return { ...state, panelOpen: true };
  }
  if (action.type === CLOSE_PANEL) {
    return { ...state, panelOpen: false };
  }
  if (action.type === SET_PANEL_POS) {
    return { ...state, panelPos: action.payload };
  }
  if (action.type === SET_CURRENT_LIST_ITEM) {
    return { ...state, currentListItem: action.payload };
  }
  if (action.type === SET_CURRENT_ELEMENT_INDEX) {
    return { ...state, currentElementIndex: action.payload };
  }

  return `No action type ${action.type}`;
};

export default MainPageReducer;
