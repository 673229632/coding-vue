import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/bill',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/bill/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/bill',
    method: 'put',
    data
  })
}
