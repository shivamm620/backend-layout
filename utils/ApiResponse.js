export class ApiResponse {
  constructor(statuCode, data, message = "success") {
    this.statuCode = statuCode;
    this.success = true;
    this.data = data;
    this.message = message;
  }
}
