import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, UserCredentialsParams } from './types';

const API_URL = process.env.REACT_APP_API_URL;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: CreateUserParams) =>
   axios.post(`${API_URL}/auth/register`, data, config);

export const postLoginUser = async (data: UserCredentialsParams) =>
   axios.post(`${API_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get(`${API_URL}/auth/status`, config);