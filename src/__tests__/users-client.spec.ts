import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { BaseClient } from '../clients/base.client'
import { UsersClient } from '../clients/users.client'
import { ResponseCache } from '../config/cache'
import { UsersEndpoints } from '../endpoints/users.endpoints'

describe('UsersClient', () => {
	let client: UsersClient
	let spy: ReturnType<typeof spyOn>

	beforeEach(() => {
		spy = spyOn(BaseClient.prototype as any, 'getResource').mockResolvedValue({
			data: {}
		})
		client = new UsersClient({
			kyInstance: {} as any,
			_cache: new ResponseCache()
		})
	})

	afterEach(() => {
		spy.mockRestore()
	})

	it('getUsersSearch defaults to empty params', async () => {
		await client.getUsersSearch()
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.usersSearch, {}, {})
	})

	it('getUsersSearch passes search params', async () => {
		await client.getUsersSearch({ q: 'nekomata', gender: 'any' })
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.usersSearch,
			{},
			{ q: 'nekomata', gender: 'any' }
		)
	})

	it('getUserById passes the id path param', async () => {
		await client.getUserById(1)
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userById, { id: 1 })
	})

	it('getUserByUsername passes the username path param', async () => {
		await client.getUserByUsername('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userByUsername, {
			username: 'Xinil'
		})
	})

	it('getUserFullProfile passes the username path param', async () => {
		await client.getUserFullProfile('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userFullProfile, {
			username: 'Xinil'
		})
	})

	it('getUserAbout passes the username path param', async () => {
		await client.getUserAbout('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userAbout, {
			username: 'Xinil'
		})
	})

	it('getUserStatistics passes the username path param', async () => {
		await client.getUserStatistics('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userStatistics, {
			username: 'Xinil'
		})
	})

	it('getUserFavorites passes the username path param', async () => {
		await client.getUserFavorites('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userFavorites, {
			username: 'Xinil'
		})
	})

	it('getUserUpdates passes the username path param', async () => {
		await client.getUserUpdates('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userUpdates, {
			username: 'Xinil'
		})
	})

	it('getUserHistory omits the type when not provided', async () => {
		await client.getUserHistory('Xinil')
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userHistory,
			{ username: 'Xinil' },
			{}
		)
	})

	it('getUserHistory passes the type when provided', async () => {
		await client.getUserHistory('Xinil', 'anime')
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userHistory,
			{ username: 'Xinil' },
			{ type: 'anime' }
		)
	})

	it('getUserFriends defaults to empty pagination', async () => {
		await client.getUserFriends('Xinil')
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userFriends,
			{ username: 'Xinil' },
			{}
		)
	})

	it('getUserFriends passes the page param', async () => {
		await client.getUserFriends('Xinil', { page: 2 })
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userFriends,
			{ username: 'Xinil' },
			{ page: 2 }
		)
	})

	it('getUserReviews passes review params', async () => {
		await client.getUserReviews('Xinil', { page: 1 })
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userReviews,
			{ username: 'Xinil' },
			{ page: 1 }
		)
	})

	it('getUserRecommendations defaults to empty pagination', async () => {
		await client.getUserRecommendations('Xinil')
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userRecommendations,
			{ username: 'Xinil' },
			{}
		)
	})

	it('getUserClubs defaults to empty pagination', async () => {
		await client.getUserClubs('Xinil')
		expect(spy).toHaveBeenCalledWith(
			UsersEndpoints.userClubs,
			{ username: 'Xinil' },
			{}
		)
	})

	it('getUserExternal passes the username path param', async () => {
		await client.getUserExternal('Xinil')
		expect(spy).toHaveBeenCalledWith(UsersEndpoints.userExternal, {
			username: 'Xinil'
		})
	})
})
