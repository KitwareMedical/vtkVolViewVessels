// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Message = Message || {};

/**
 * @enum
 */
Message.Type = {
  Response: 0,
  Request: 1,
  Publish: 2
};

/**
 * @constructor
 */
Message.Message = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Message.Message}
 */
Message.Message.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Message.Message=} obj
 * @returns {Message.Message}
 */
Message.Message.getRootAsMessage = function(bb, obj) {
  return (obj || new Message.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Message.Message.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {Message.Type}
 */
Message.Message.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {Message.Type} */ (this.bb.readInt8(this.bb_pos + offset)) : Message.Type.Response;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Message.Message.prototype.target = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Message.Message.prototype.payload = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Message.Message.prototype.binaryAttachment1 = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Message.Message.prototype.binaryAttachment1Length = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Message.Message.prototype.binaryAttachment1Array = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Message.Message.startMessage = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} id
 */
Message.Message.addId = function(builder, id) {
  builder.addFieldInt64(0, id, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Message.Type} type
 */
Message.Message.addType = function(builder, type) {
  builder.addFieldInt8(1, type, Message.Type.Response);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} targetOffset
 */
Message.Message.addTarget = function(builder, targetOffset) {
  builder.addFieldOffset(2, targetOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} payloadOffset
 */
Message.Message.addPayload = function(builder, payloadOffset) {
  builder.addFieldOffset(3, payloadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} binaryAttachment1Offset
 */
Message.Message.addBinaryAttachment1 = function(builder, binaryAttachment1Offset) {
  builder.addFieldOffset(4, binaryAttachment1Offset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Message.Message.createBinaryAttachment1Vector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Message.Message.startBinaryAttachment1Vector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Message.Message.endMessage = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Message.Message.finishMessageBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.Message = Message;
