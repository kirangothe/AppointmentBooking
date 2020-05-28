import BaseService from './base-service';

class DocterService extends BaseService {
  static register(params, cb) {
    super.postData('register', {doctor: params}, cb,
      () =>{
        console.log('Doctor Registered!!');
      });
  }
  static login(params, cb) {
    super.postData('doctors/signin.json', {doctor: params}, cb,
      () =>{
        console.log('Doctor Logged in!!');
      });
  }
  static getDoctorNotifications(params, cb) {
    super.getData('doctor_notifications.json', params, cb,
      () =>{
        console.log('Doctor Notifications Loaded!!');
      });
  }

  static getDoctor(params, cb) {
    super.getData('doctors', params, cb,
      () =>{
        console.log('Doctors List Loaded!!');
      });
  }

  static appointmentsByDoctor(params, cb) {
    super.fetchData('appointmentsByDoctor', params, cb,
      () =>{
        // console.log('appointments List Loaded!!');
      });
  }
}

export default DocterService;
