import React, {createContext, useContext} from "react";

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
export const authContext = createContext();

// 全域 初始狀態樹
const initContextObject = {
    user: null,
}

export function ProvideAuth({children}) {
    return (
        <authContext.Provider value={initContextObject}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}