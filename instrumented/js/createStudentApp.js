function cov_2ojryir2ym(){var path="C:\\Users\\Admin\\Downloads\\DevOps-Project-daryl-final code\\public\\js\\createStudentApp.js";var hash="8475bb8515ba64235a97b7c411953eaea16d9d75";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Admin\\Downloads\\DevOps-Project-daryl-final code\\public\\js\\createStudentApp.js",statementMap:{"0":{start:{line:1,column:0},end:{line:43,column:3}},"1":{start:{line:2,column:4},end:{line:2,column:27}},"2":{start:{line:5,column:22},end:{line:5,column:64}},"3":{start:{line:6,column:17},end:{line:6,column:54}},"4":{start:{line:8,column:35},end:{line:8,column:77}},"5":{start:{line:10,column:4},end:{line:39,column:5}},"6":{start:{line:12,column:25},end:{line:18,column:10}},"7":{start:{line:21,column:8},end:{line:34,column:9}},"8":{start:{line:22,column:27},end:{line:22,column:48}},"9":{start:{line:24,column:12},end:{line:24,column:99}},"10":{start:{line:25,column:12},end:{line:25,column:57}},"11":{start:{line:28,column:12},end:{line:28,column:65}},"12":{start:{line:31,column:32},end:{line:31,column:53}},"13":{start:{line:32,column:12},end:{line:32,column:91}},"14":{start:{line:33,column:12},end:{line:33,column:55}},"15":{start:{line:36,column:8},end:{line:36,column:39}},"16":{start:{line:37,column:8},end:{line:37,column:84}},"17":{start:{line:38,column:8},end:{line:38,column:51}},"18":{start:{line:42,column:4},end:{line:42,column:51}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:1,column:72},end:{line:1,column:73}},loc:{start:{line:1,column:94},end:{line:43,column:1}},line:1}},branchMap:{"0":{loc:{start:{line:21,column:8},end:{line:34,column:9}},type:"if",locations:[{start:{line:21,column:8},end:{line:34,column:9}},{start:{line:21,column:8},end:{line:34,column:9}}],line:21},"1":{loc:{start:{line:24,column:49},end:{line:24,column:98}},type:"binary-expr",locations:[{start:{line:24,column:49},end:{line:24,column:63}},{start:{line:24,column:67},end:{line:24,column:98}}],line:24},"2":{loc:{start:{line:32,column:49},end:{line:32,column:90}},type:"binary-expr",locations:[{start:{line:32,column:49},end:{line:32,column:66}},{start:{line:32,column:70},end:{line:32,column:90}}],line:32}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8475bb8515ba64235a97b7c411953eaea16d9d75"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2ojryir2ym=function(){return actualCoverage;};}return actualCoverage;}cov_2ojryir2ym();cov_2ojryir2ym().s[0]++;document.getElementById("createStudentForm").addEventListener("submit",async function(event){cov_2ojryir2ym().f[0]++;cov_2ojryir2ym().s[1]++;event.preventDefault();// Prevent form from reloading the page
// Get the form data
const studentID=(cov_2ojryir2ym().s[2]++,document.getElementById("studentID").value);const name=(cov_2ojryir2ym().s[3]++,document.getElementById("name").value);const responseMessageElement=(cov_2ojryir2ym().s[4]++,document.getElementById("responseMessage"));cov_2ojryir2ym().s[5]++;try{// Send a POST request to the backend
const response=(cov_2ojryir2ym().s[6]++,await fetch("http://localhost:5050/students",{// Use full URL if backend is on a different origin
method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentID,name})}));// Check if response is okay and parse the JSON
cov_2ojryir2ym().s[7]++;if(response.ok){cov_2ojryir2ym().b[0][0]++;const result=(cov_2ojryir2ym().s[8]++,await response.json());// Display success message
cov_2ojryir2ym().s[9]++;responseMessageElement.textContent=(cov_2ojryir2ym().b[1][0]++,result.message)||(cov_2ojryir2ym().b[1][1]++,"Student created successfully.");cov_2ojryir2ym().s[10]++;responseMessageElement.style.color="green";// Clear the form inputs if the student was created successfully
cov_2ojryir2ym().s[11]++;document.getElementById("createStudentForm").reset();}else{cov_2ojryir2ym().b[0][1]++;// Handle non-200 responses
const errorResult=(cov_2ojryir2ym().s[12]++,await response.json());cov_2ojryir2ym().s[13]++;responseMessageElement.textContent=(cov_2ojryir2ym().b[2][0]++,errorResult.error)||(cov_2ojryir2ym().b[2][1]++,"An error occurred.");cov_2ojryir2ym().s[14]++;responseMessageElement.style.color="red";}}catch(error){cov_2ojryir2ym().s[15]++;console.error("Error:",error);cov_2ojryir2ym().s[16]++;responseMessageElement.textContent="An error occurred. Please try again.";cov_2ojryir2ym().s[17]++;responseMessageElement.style.color="red";}// Ensure the response message is always visible
cov_2ojryir2ym().s[18]++;responseMessageElement.style.display="block";});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm9qcnlpcjJ5bSIsImFjdHVhbENvdmVyYWdlIiwicyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmIiwicHJldmVudERlZmF1bHQiLCJzdHVkZW50SUQiLCJ2YWx1ZSIsIm5hbWUiLCJyZXNwb25zZU1lc3NhZ2VFbGVtZW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiYiIsInJlc3VsdCIsImpzb24iLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJzdHlsZSIsImNvbG9yIiwicmVzZXQiLCJlcnJvclJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImRpc3BsYXkiXSwic291cmNlcyI6WyJjcmVhdGVTdHVkZW50QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlU3R1ZGVudEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIGZyb20gcmVsb2FkaW5nIHRoZSBwYWdlXHJcblxyXG4gICAgLy8gR2V0IHRoZSBmb3JtIGRhdGFcclxuICAgIGNvbnN0IHN0dWRlbnRJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZGVudElEXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNwb25zZU1lc3NhZ2VcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9zdHVkZW50c1wiLCB7IC8vIFVzZSBmdWxsIFVSTCBpZiBiYWNrZW5kIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0dWRlbnRJRCwgbmFtZSB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiByZXNwb25zZSBpcyBva2F5IGFuZCBwYXJzZSB0aGUgSlNPTlxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSByZXN1bHQubWVzc2FnZSB8fCBcIlN0dWRlbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCI7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgZm9ybSBpbnB1dHMgaWYgdGhlIHN0dWRlbnQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlU3R1ZGVudEZvcm1cIikucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbm9uLTIwMCByZXNwb25zZXNcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvclJlc3VsdC5lcnJvciB8fCBcIkFuIGVycm9yIG9jY3VycmVkLlwiO1xyXG4gICAgICAgICAgICByZXNwb25zZU1lc3NhZ2VFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJlc3BvbnNlTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xyXG4gICAgICAgIHJlc3BvbnNlTWVzc2FnZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgcmVzcG9uc2UgbWVzc2FnZSBpcyBhbHdheXMgdmlzaWJsZVxyXG4gICAgcmVzcG9uc2VNZXNzYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoidWtGQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQUFBQSxjQUFBLEdBQUFFLENBQUEsTUFmWkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFFLGVBQWVDLEtBQUssQ0FBRSxDQUFBTixjQUFBLEdBQUFPLENBQUEsTUFBQVAsY0FBQSxHQUFBRSxDQUFBLE1BQzFGSSxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDLENBQUU7QUFFeEI7QUFDQSxLQUFNLENBQUFDLFNBQVMsRUFBQVQs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