<script>
import { get, showSuccess } from "./util";
/* import qcloud from 'wafer2-client-sdk' */
import config from "./config";

export default {
  async created() {
    const res = await get("/weapp/demo");
    // console.log(123, res);
    console.log("Start Mini App");
  }
};
</script>

<style>
.btn {
  color:white;
  background: #EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active {
  background: #FA5A49;
}
</style>