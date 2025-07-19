import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authGet, authPost } from '../../../services/axiosConfig.js/axiosAuthConfig';
import useAuth from '../conetext-hooks/useAuth';

export const useAuthGet = (path, queryKey) => {
    const queryFn = () => authGet(path);
    const { isAuthenticated } = useAuth();
    return useQuery({
        queryKey,
        queryFn: queryFn,
        enabled: !!(!isAuthenticated && path),
        retry:false
    })
}

export const useAuthPost = (queryKey) => {
    console.log('first')
    const queryClient = useQueryClient();
    const mutationFn = (path,data) => authPost(path, data);
    const { login } = useAuth();
    return useMutation({
        mutationFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey });
            console.log('data:: ', data);
            login(data);
        },
        onError: (error) => {
            console.error("Error authenticating :: ", error);
        }
    })
}