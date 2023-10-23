// models/someModel.js
import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const someModelSchema = new Schema({
  // Model schema definition
});

const SomeModel = model('SomeModel', someModelSchema);

export default SomeModel;
