interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

export const useOfflineStorage: () => IUseOfflineStorage = () => {

  return {
    saveData(key: string, data: any) {
      localStorage.setItem(key, JSON.stringify(data))
    },
    loadData(key: string) {
      return localStorage.getItem(key)
    }
  }
}