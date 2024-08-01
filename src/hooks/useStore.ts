import { RootDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';


export const useCustomSelector: RootState = useSelector
export const useCustomDispatch: () => RootDispatch = useDispatch