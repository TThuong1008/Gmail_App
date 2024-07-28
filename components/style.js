import { StyleSheet } from 'react-native'

export const styleApp = StyleSheet.create({
    iconPen: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 28,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
      },
});

export const styleInput = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      iconLeft: {
        marginRight: 8,
      },
      input: {
        flex: 1,
        fontSize: 16,
        height: 40,
        marginLeft: 20,
      },
      iconRightContainer: {
        width: 36,
        height: 36,
        borderRadius: 18, // Sử dụng 18 để tạo hình tròn
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconRight: {
        color: 'white',
        fontWeight: '600',
        fontSize: 22,
      },
});

export const styleGmailItem = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 80,
      },
      avatar:{
        height: 45,
        width: 45,
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textAvatar: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
      },
      textContainer: {
        flexDirection: 'row'
      },
      textLeft:{
        width: 200,
        marginLeft: 5,
        marginRight: 40,
      },
      textRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
      text: {
        fontSize: 17,
      },
      time: {
        marginBottom: 17,
        color: '#555',
      },
});

export const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    inputContainer:{
        paddingTop: 50,
    },
    bodyContainer: {
        paddingTop: 20,
    },
    textBody:{
        fontSize: 20,
        paddingLeft: 13,
        fontWeight: '500',
    },    
});

