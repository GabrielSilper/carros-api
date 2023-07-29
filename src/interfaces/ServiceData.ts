type ServiceOk<T> = {
  error: false;
  status: number;
  data: T;
};

type Message = {
  message: string;
};

type ServiceWrong = {
  error: true;
  status: number;
  data: Message;
};

type ServiceData<T> = ServiceOk<T> | ServiceWrong;

export default ServiceData;
