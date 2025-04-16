export interface IPropsMessage {
    type: "warning" | "success" | "danger";
    time: number;
    message: string;
  }
  
  export interface IShowMessage extends IPropsMessage {
    onEndMessage: (data: IPropsMessage) => void;
  }