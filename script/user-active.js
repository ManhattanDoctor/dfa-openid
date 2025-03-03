var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();

var attribute = attributes.getValue('status');
if (attribute && !attribute.isEmpty()) {
    var item = attribute.asString(0);
    if (item === 'ACTIVE') {
        $evaluation.grant();
    }
}
