export function getLocalUser () {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
        return false;
    }
    return JSON.parse(userStr);
}