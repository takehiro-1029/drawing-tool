/**
 * listに対してnewDataが含まれていれば削除、含まれていなければpush
 */
export const toggleArray = <T extends any[], K = T[number]>(list: T, newData: K): T => {
  if (list.includes(newData)) {
    return list.filter((d) => d !== newData) as T;
  }
  return [...list, newData] as T;
};
