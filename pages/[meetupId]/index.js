import MeetupDetail from '../../components/meetups/MeetupDetail';
function MeetupDetails(){
    return (
        <MeetupDetail
         image= 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
         title = 'First Meetup'
         address= 'Some Street 5, Some City'
         description = 'This is a first meetup'
         />
    )
}

export default MeetupDetails;