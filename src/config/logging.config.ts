import type { AfterResponseHook, BeforeErrorHook, BeforeRequestHook } from 'ky'

export const loggingBeforeRequest: BeforeRequestHook = request => {
	console.info(`[Request] ${request.method.toUpperCase()} | ${request.url}`)
}

export const loggingAfterResponse: AfterResponseHook = (
	request,
	_options,
	response
) => {
	if (response.ok) {
		console.info(
			`[Request Response] ${request.method.toUpperCase()} | ${request.url}`
		)
	} else {
		console.error(
			`[Response Error] CODE ${response.status} | ${response.statusText}`
		)
	}
}

export const loggingBeforeError: BeforeErrorHook = error => {
	console.error(
		`[Request Error] CODE ${error.response?.status ?? 'UNKNOWN'} | ${error.message}`
	)
	return error
}
