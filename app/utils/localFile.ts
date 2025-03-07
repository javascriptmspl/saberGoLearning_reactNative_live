// import { Alert } from "react-native";

// const actualDownload = (link: string) => {
//     const { dirs } = RNFetchBlob.fs;
//     RNFetchBlob.config({
//         fileCache: true,
//         addAndroidDownloads: {
//             useDownloadManager: true,
//             notification: true,
//             mediaScannable: true,
//             title: `test.pdf`,
//             path: `${dirs.DownloadDir}/test.pdf`,
//         },
//     })
//         .fetch("GET", link, {})
//         .then((res: any) => {
//             console.log("File Downloaded", "The file saved to ", res.path());
//             Alert.alert("File Downloaded", `The file saved to downloads!`);
//         })
//         .catch((e) => {
//             console.log(e);
//             Alert.alert("Alert", e.message);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
// };

// const downloadFile = async (link) => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             actualDownload(link);
//         } else {
//             Alert.alert(
//                 "Permission Denied!",
//                 "You need to give storage permission to download the file"
//             );
//             setLoading(false);
//         }
//     } catch (err) {
//         console.warn(err);
//         setLoading(false);
//     }
// };