import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const use_app_dispatch = useDispatch.withTypes<AppDispatch>();
export const use_app_selector: TypedUseSelectorHook<RootState> = useSelector;