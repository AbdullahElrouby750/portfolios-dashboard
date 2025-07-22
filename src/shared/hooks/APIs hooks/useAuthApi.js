import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authGet, authPost } from '../../../services/axiosConfig.js/axiosAuthConfig';
import useAuth from '../conetext-hooks/useAuth';
import { useNavigate } from 'react-router';

export const useAuthGet = (path, queryKey) => {
    const queryFn = () => authGet(path);
    const { isAuthenticated } = useAuth();
    return useQuery({
        queryKey,
        queryFn: queryFn,
        enabled: !!(!isAuthenticated && path),
        retry:false,
        refetchOnWindowFocus: false
    })
}

export const useAuthPost = (queryKey) => {
    const queryClient = useQueryClient();
    const mutationFn = (sentData) => authPost(sentData.path, sentData.data);
    const { login } = useAuth();
    const navigator = useNavigate();
    return useMutation({
        mutationFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey });
            console.log('data:: ', data);
            login(data);
            navigator('/dashboard')
        },
        onError: (error) => {
            console.error("Error authenticating :: ", error);
        }
    })
}