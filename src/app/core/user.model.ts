export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;

  //other fields from forms.
  phoneNumber?: string;
  dateOfBirth?: string;
  collage?: string;
  instituteCode?: number;
  enrollmentNumber?: number;
  department?: string;
  principalName?: string;
  academicYear?: string
}
