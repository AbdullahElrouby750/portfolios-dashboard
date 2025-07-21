import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, apiPut, apiDelete } from '../../../services/axiosConfig.js/axiosApiConfig';
import useAuth from '../conetext-hooks/useAuth';

export const useApiGet = (path, params, queryKey) => {
    const queryFn = () => apiGet(path, params);
    const { isAuthenticated } = useAuth();
    return useQuery({
        queryKey,
        queryFn,
        enabled: !!(isAuthenticated && path)
    });
}

export const useApiPost = (queryKey, onSuccessFn = () => { }, onErrorFn = () => { }) => {
    const queryClient = useQueryClient();
    const mutationFn = (sentData) => apiPost(sentData.path, sentData.data);
    return useMutation({
        mutationFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey });
            onSuccessFn(data);
        },
        onError: (error) => {
            console.error("Error authenticating :: ", error);
            onErrorFn();
        }
    })
}

export const useApiPut = (queryKey, onSuccessFn = () => { }, onErrorFn = () => { }) => {
    const queryClient = useQueryClient();
    const mutationFn = (sentData) => apiPut(sentData.path, sentData.data);
    return useMutation({
        mutationFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey });
            onSuccessFn(data);
        },
        onError: (error) => {
            console.error("Error authenticating :: ", error);
            onErrorFn();
        }
    })
}

export const useApiDelete = (queryKey, onSuccessFn = () => { }, onErrorFn = () => { }) => {
    const queryClient = useQueryClient();
    const mutationFn = (sentData) => apiDelete(sentData.path);
    return useMutation({
        mutationFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey });
            onSuccessFn(data);
        },
        onError: (error) => {
            console.error("Error authenticating :: ", error);
            onErrorFn();
        }
    })
}