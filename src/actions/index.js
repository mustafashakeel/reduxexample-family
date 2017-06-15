export function selectFamily(member){

	console.log(" selectFamily ", member);
// actions	
	return {
		type:'MEMBER_SELECTED',
		
		payload:member
	}
}