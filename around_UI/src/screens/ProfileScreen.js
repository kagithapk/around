/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, SafeAreaView} from 'react-native';
import { Icon } from 'react-native-elements';
import LineComponent from '../components/LineComponent';
import PostComponent from '../components/PostComponent';
import aroundApi from '../api/route';

const ProfileScreen = ({navigation}) => {
  const searchUserId = navigation.getParam('searchUserId');
  console.log(searchUserId);
  const [details, setDetails] = useState({});

  const fetchCall = async() => {
    try {
      const response = await aroundApi.post('profile-data', {searchUserId});
      console.log('useEffect 2');
      console.log(response.data);
      setDetails(response.data);
    } catch (e) {
      console.log('error in profile');
    }
  };

  useEffect(() => {
    console.log('useEffect 1');
    fetchCall();
  }, []);

  // const details = {
  //       profilePic: 'https://lh3.googleusercontent.com/a-/AOh14Gih4JyvyzGuoIMTcwki1MOWMZ3uPnP46_BHIZufvg=s96-c' ,
  //       userName: 'B Vamshi',
  //       friends: false,
  //       posts:[
  //         {
  //           'id': '5f073c70e885280360d4c812',
  //           'name': 'Praveen Kanth Kagitha',
  //           'postHeading': 'Http request by praveen',
  //           'postInfo': 'TextInput ',
  //           'postLikes': [
  //             {
  //               'userId': '101242911544329684304',
  //               'userName': 'pranith modem',
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'id': '0'
  //             }
  //           ],
  //           'postComments': 0,
  //           'userImage': 'https://lh3.googleusercontent.com/a-/AOh14GgzLKIjR906Jduqbjczw36OOkgKUXwfuM28MP8y=s96-c',
  //           'postTime': 'Jul 9, 2020 9:19 PM',
  //           'likesCount': 1,
  //           'commentCount': 0,
  //           'postLikedByYou': true,
  //           'timeSort': 1594309744886,
  //         },
  //         {
  //           'id': '5f071b315ab0360420eb50d4',
  //           'name': 'pranith modem',
  //           'postHeading': 'Second',
  //           'postInfo': 'TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.For example, ',
  //           'postLikes': [
  //             {
  //               'userId': '101242911544329684304',
  //               'userName': 'pranith modem',
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'id': '0'
  //             },
  //             {
  //               'userId': '104864873114821696385',
  //               'userName': 'B Vamshi',
  //               'userImage': 'https://lh3.googleusercontent.com/a-/AOh14Gih4JyvyzGuoIMTcwki1MOWMZ3uPnP46_BHIZufvg=s96-c',
  //               'id': '1'
  //             }
  //           ],
  //           'postComments': [
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'Wonderful information\n',
  //               'commentTime': 1594301943319,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '0'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'aaaa',
  //               'commentTime': 1594302737732,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '1'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'Ffff',
  //               'commentTime': 1594302744410,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '2'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'Yourself',
  //               'commentTime': 1594309107141,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '3'
  //             },
  //             {
  //               'userName': 'Praveen Kanth Kagitha',
  //               'userId': '101374130151609024447',
  //               'comment': 'Yes, myself!',
  //               'commentTime': 1594309130864,
  //               'userImage': 'https://lh3.googleusercontent.com/a-/AOh14GgzLKIjR906Jduqbjczw36OOkgKUXwfuM28MP8y=s96-c',
  //               'time': 'Jul 9, 2020',
  //               'id': '4'
  //             },
  //             {
  //               'userName': 'B Vamshi',
  //               'userId': '104864873114821696385',
  //               'comment': 'Hi, there!\n',
  //               'commentTime': 1594369037766,
  //               'userImage': 'https://lh3.googleusercontent.com/a-/AOh14Gih4JyvyzGuoIMTcwki1MOWMZ3uPnP46_BHIZufvg=s96-c',
  //               'time': 'Jul 10, 2020',
  //               'id': '5'
  //             },
  //             {
  //               'userName': 'Praveen Kanth Kagitha',
  //               'userId': '101374130151609024447',
  //               'comment': 'This is a good post.',
  //               'commentTime': 1594376392633,
  //               'userImage': 'https://lh3.googleusercontent.com/a-/AOh14GgzLKIjR906Jduqbjczw36OOkgKUXwfuM28MP8y=s96-c',
  //               'time': 'Jul 10, 2020',
  //               'id': '6'
  //             }
  //           ],
  //           'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //           'postTime': 'Jul 9, 2020 6:57 PM',
  //           'likesCount': 2,
  //           'commentCount': 7,
  //           'postLikedByYou': true,
  //           'timeSort': 1594301233103
  //         },
  //         {
  //           'id': '5f057f948a47fa3d8cc00713',
  //           'name': 'pranith modem',
  //           'postHeading': 'First',
  //           'postInfo': 'informatin for test',
  //           'postLikes': [
  //             {
  //               'userId': '112633648650341529046',
  //               'userName': 'pranith modem',
  //               'userImage': 'https://lh6.googleusercontent.com/-jATd4XMGS10/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmBsInp6YGGDo9ZJAeIQo9E9saaFQ/s96-c/photo.jpg',
  //               'id': '0'
  //             },
  //             {
  //               'userId': '101374130151609024447',
  //               'userName': 'Praveen Kanth Kagitha',
  //               'userImage': 'https://lh3.googleusercontent.com/a-/AOh14GgzLKIjR906Jduqbjczw36OOkgKUXwfuM28MP8y=s96-c',
  //               'id': '1'
  //             },
  //             {
  //               'userId': '101242911544329684304',
  //               'userName': 'pranith modem',
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'id': '2'
  //             }
  //           ],
  //           'postComments': [
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'first comment',
  //               'commentTime': 1594222548661,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 8, 2020',
  //               'id': '0'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'attached db',
  //               'commentTime': 1594291403891,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '1'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'checking count',
  //               'commentTime': 1594291524319,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '2'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'Hehe',
  //               'commentTime': 1594294525528,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '3'
  //             },
  //             {
  //               'userName': 'pranith modem',
  //               'userId': '101242911544329684304',
  //               'comment': 'vamshi demo',
  //               'commentTime': 1594302711008,
  //               'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //               'time': 'Jul 9, 2020',
  //               'id': '4'
  //             }
  //           ],
  //           'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //           'postTime': 'Jul 8, 2020 1:41 PM',
  //           'likesCount': 3,
  //           'commentCount': 5,
  //           'postLikedByYou': true,
  //           'timeSort': 1594195860273
  //         }
  //       ],
  //       postsCount: 0,
  //       friendsList: [
  //         {
  //           'userId': '1012429115443296843043',
  //           'userName': 'Amrit nath',
  //           'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         },
  //         {
  //           'userId': '1126336486503415290462',
  //           'userName': 'Praveen Kanth Kagitha',
  //           'userImage': 'https://lh3.googleusercontent.com/a-/AOh14GgzLKIjR906Jduqbjczw36OOkgKUXwfuM28MP8y=s96-c',
  //         },
  //         // {
  //         //   'userId': '1012429115443296843041',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/a-/AOh14Gih4JyvyzGuoIMTcwki1MOWMZ3uPnP46_BHIZufvg=s96-c',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843043',
  //         //   'userName': 'B Vamshi',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843043',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1126336486503415290462',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843041',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843043',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843043',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1126336486503415290462',
  //         //   'userName': 'Amrit nath pervaram',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843041',
  //         //   'userName': 'pranith modem avenger',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //         // {
  //         //   'userId': '1012429115443296843043',
  //         //   'userName': 'pranith modem',
  //         //   'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
  //         // },
  //       ],
  //       mutualFriendsCount: 0,
  //       mutualFriends: 0,
  //       friendsCount:20,
  // };

  const friendsGrid = Object.keys(details).length ? details.friendsList.slice(0,6) : 0;

  // const [userDetails, setDetails] = useState(details);
  if (!Object.keys(details).length){
    return <Text>Loading....</Text>;
  }

  return (
    <ScrollView>
    <View style = {styles.profileScreen}>
      <View style = {styles.profileInfo}>
        <Image
          style={styles.userImage}
          source={{ uri: details.profilePic }}
        />
        <Text style={styles.userName}>{details.userName}</Text>
      </View>
      <View style={styles.profileButton}>
        <TouchableOpacity style={styles.pButton}>
          <Icon style = {styles.addIcon} name={ details.friends ? 'message' : 'person-add'} size = {22} color = 'white' />
          <Text style = {styles.buttonText}>{ details.friends ? 'message' : 'add friend'}</Text>
        </TouchableOpacity>
      </View>
      <LineComponent />
      <View style = {styles.friendsContainer}>
        <Text style = {styles.containerHeading}>friends</Text>
        <Text style = {styles.friendsCount}>{details.friendsCount} ({details.mutualFriendsCount ? details.mutualFriendsCount : 0} mutual)</Text>
        <View>
          <View style={styles.gridView}>
            {
              friendsGrid.map((item)=> {
                return (
                  <TouchableWithoutFeedback key={item.userId}>
                    <View style={styles.friendsGrid}>
                      <Image
                        style={styles.friendGridImage}
                        source={{uri:item.userImage}}
                      />
                      <Text numberOfLines={1} style={styles.gridUserName}>{item.userName}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })
            }
          </View>
          { details.friendsCount
            ?
            <View style={styles.profileButton}>
              <TouchableOpacity style={styles.allFriendsButton}>
                <Text style={styles.fButtonText}>see all friends</Text>
              </TouchableOpacity>
            </View>
            :
            <Text style={styles.plainText}>No Friends Yet</Text>
          }
        </View>
      </View>
      <LineComponent/>
      <View style={styles.profilePostsContainer}>
        <Text style={styles.containerHeading}>posts</Text>
        <Text style={styles.noPosts}> { details.postsCount ? '' : 'no posts yet' } </Text>
        <View style={styles.userPosts}>
          {
            details.posts.map((item)=> {
              return (
               <PostComponent item={item} navigation={navigation} />
              );
            })
          }
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    padding: 20,
    backgroundColor: 'white',
    flex:1,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  userName: {
    fontSize: 30,
  },
  profileInfo: {
    alignItems: 'center',
  },
  pButton: {
    elevation: 6,
    borderRadius: 2,
    fontSize:70,
    padding:8,
    backgroundColor: '#59B8F1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 13,
  },
  addIcon: {
    paddingHorizontal: 6,
  },
  profileButton: {
    marginBottom: 15,
  },
  containerHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  friendsContainer: {
    marginVertical: 8,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignSelf: 'flex-start',
    justifyContent: 'space-around',
    marginVertical: 18,
  },
  friendsGrid: {
    elevation: 8,
    backgroundColor: 'white',
    flexDirection: 'column',
    // overflow: 'hidden',
    alignItems: 'center',
    width: 100,
    marginBottom: 15,
  },
  friendGridImage: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  gridUserName: {
    flexShrink: 1,
    textTransform: 'capitalize',
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  allFriendsButton: {
    elevation: 6,
    borderRadius: 2,
    fontSize:70,
    padding:8,
    backgroundColor: '#E6EEF3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 13,
  },
  plainText: {
    textAlign:'center',
  },
  profilePostsContainer: {
    marginVertical: 8,
  },
  noPosts: {
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default ProfileScreen;
