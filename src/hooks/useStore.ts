import { RootDispatch, RootState } from '../store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector
export const useCustomDispatch: () => RootDispatch = useDispatch