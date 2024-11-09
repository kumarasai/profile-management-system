

export const validateName = (name: string): string => {
    if (!name) return 'Name is required.';
    if (name.length < 3) return 'Name must be at least 3 characters.';
    return '';
  };
  
  export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required.';
    if (!emailRegex.test(email)) return 'Invalid email format.';
    return '';
  };
  
  export const validateAge = (age?: number): string => {
    if (age && isNaN(age)) return 'Age must be a number.';
    return '';
  };
