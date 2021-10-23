import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Dispatch } from './action';
import { AppState, reducer, initialState } from './reducer';

/** ******************************************* */
/* Contexts
/********************************************* */
const AppStateContext = createContext<AppState | undefined>(undefined);

const DispatchContext = createContext<Dispatch | undefined>(undefined);

/** ******************************************* */
/* Context Providers
/********************************************* */
type Props = { children: ReactNode };

function ContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

/** ******************************************* */
/* Context Consumers
/********************************************* */
function useAppState(): AppState {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(
      'useAppState should be used within <AppStateContext.Provider>'
    );
  }
  return context;
}

function useDispatch(): Dispatch {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      'useDispatch should be used within <DispatchContext.Provider>'
    );
  }
  return context;
}

function useAppContext(): [AppState, Dispatch] {
  return [useAppState(), useDispatch()];
}

export { ContextProvider, useAppState, useDispatch, useAppContext };
